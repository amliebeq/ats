class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]
    def create
        user = User.create(user_params)
        if user.valid?
            render json: user, status: :created
            session[:user_id] = user.id
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :ok
    end

    private

    def user_params
        params.permit(:username, :password, :first_name, :last_name, :title, :password_confirmation)
    end
end
