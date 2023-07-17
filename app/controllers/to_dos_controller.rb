class ToDosController < ApplicationController
    def create
        item = ToDo.create(item_params)
        if item.valid?
            render json: item, status: :created
        else
            render json: {errors: item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find_by(id: session[:id])
        item = user.to_dos.find_by(id: params[:id])
        if item.update(item_params)
            render json: item, status: :created
        else
            render json: {errors: item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: session[:id])
        item = user.to_dos.find_by(id: params[:id])
        if item.destroy
            render json: item
        else
            render json: {errors: item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def item_params
        params.permit(:user_id, :item, :completed)
    end
end
