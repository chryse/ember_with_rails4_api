class ClassroomsController < ApplicationController
	skip_before_filter :verify_authenticity_token

	def index
  		classrooms = Classroom.all
		render json: {'classrooms': classrooms }
	end

	def create
		puts params
		classroom = Classroom.create(name: params[:classroom][:name], description: params[:classroom][:description])
    	render json: classroom
	end
end
