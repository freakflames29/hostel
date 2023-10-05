# frozen_string_literal: true

class HomesController < ApplicationController
  def index
    @result = 2
  end

  def search

    @params_opt = params[:opt]

    puts "#{@params_opt}****************************-"
    if @params_opt.eql?("TIT")

      @params_downcase = params[:search][:search_q].downcase

      @found_hostel = Hostel.where("title LIKE ?", "%#{@params_downcase}%")
      @result = 0
      if @found_hostel and @found_hostel.size > 0
        @result = 1

        render :index
      else
        @result = 0
        render :index
      end
    elsif @params_opt.eql?("CIT")
      @params_downcase = params[:search][:search_q].downcase

      @found_hostel = Hostel.where("city LIKE ?", "%#{@params_downcase}%")
      @result = 0
      if @found_hostel and @found_hostel.size > 0
        @result = 1

        render :index
      else
        @result = 0
        render :index
      end
    end
  end
end