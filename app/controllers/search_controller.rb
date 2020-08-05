class SearchController < ApplicationController
  def index
    q = params[:q]
    @stores    = Store.search(name_cont: q).result
    @products = Product.search(name_cont: q).result
  end
end
