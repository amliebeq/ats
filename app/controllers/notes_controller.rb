class NotesController < ApplicationController
    def create
        note = Note.create(note_params)
        if note.valid?
            render json: note, status: :created
        else
            render json: { errors: note.errors.full_messages }, status: :unprocessable_entity 
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        note = user.notes.find_by(id: params[:id])
        if note.destroy
            render json: note
        else
            render json: { errors: note.errors.full_messages }, status: :unprocessable_entity 
        end
    end

    def update
        user = User.find_by(id: session[:user_id])
        note = user.notes.find_by(id: params[:id])
        if note.update(note_params)
            render json: note, status: :created
        else
            render json: { errors: note.errors.full_messages }, status: :unprocessable_entity
        end
    end

    private
    def note_params
        params.permit(:applicant_id, :user_id, :body)
    end
end
