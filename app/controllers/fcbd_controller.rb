class FcbdController < ApplicationController
  def index
    @posts = Post.published.last(3)
  end

  def create
    @lauch_list = LaunchList.new(launch_list_params)

    if @lauch_list.save
      respond_to do |format|
        format.html { redirect_to fcbd_index_path, notice: "Launch List was successfully created." }
        format.turbo_stream
      end
    else
      render :new, status: :unprocessable_entity
    end
  end

  private
    def launch_list_params
      params.require(:launch_list).permit(:email, :opt_in)
    end
end
