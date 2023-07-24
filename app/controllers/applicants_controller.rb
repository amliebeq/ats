class ApplicantsController < ApplicationController
    def create
        applicant = Applicant.create(applicant_params)
        if applicant.valid?
            render json: applicant, status: :created
        else
            render json: {errors: applicant.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        applicant = user.applicants.find_by(id: params[:id])
        if applicant.destroy
            render json: applicant
        else
            render json: { errors: applicant.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        applicant = user.applicants.find_by(id: params[:id])
        if applicant.update(applicant_params)
            render json: applicant, status: :created
        else
            render json: { errors: applicant.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private

    def applicant_params
        params.permit(:first_name, :last_name, :position, :email, :phone, :city, :state, :user_id, :status, :resume)
    end
end
