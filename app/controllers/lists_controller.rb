class ListsController < ApplicationController
    def create
        list = Applicant.find_by(id: params[:applicant_id]).lists << List.create(list_params)
        if list
            render json: List.last, status: :created
        else
            render json: { errors: list.errors.full_messages }, status: :unprocessable_entity 
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        list = user.lists.find_by(id: params[:id])
        if list.destroy
            render json: list
        else
            render json: { errors: list.errors.full_messages }, status: :unprocessable_entity 
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        list = user.lists.find_by(id: params[:id])
        if list.update(list_params)
            render json: list, status: :created
        else
            render json: { errors: list.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def list_params
        params.permit(:name, :user_id, :applicant_id)
    end
end
