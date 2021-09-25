class Dashboard::StoresController < Dashboard::BaseController
    before_action :set_store, only: [:edit, :delete, :update]
    def index
      @stores = current_user.stores
    end
  
    def new
      @store = Store.new
    end
  
    def create
    end
  
    def edit
    end
  
    def update
      @store.update!(store_params)
      redirect_to dashboard_stores_path
    end
  
    def delete
    end
  
    private
  
    def set_store
      @store = Store.find_by(slug: params[:slug])
    end
  
    def store_params
      params.require(:store).permit(:name, :description, :display_image, :cover_image)
    end
end
    