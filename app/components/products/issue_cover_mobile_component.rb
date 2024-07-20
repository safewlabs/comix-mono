# frozen_string_literal: true

class Products::IssueCoverMobileComponent < ViewComponent::Base
  def initialize(product:, user:)
    @product = product
    @user = user
  end

  def is_onboarded?
    @product.store.user.stripe_user_id &&
    @product.stripe_product_id &&
    @product.stripe_price_id
  end

  def is_free?
    @product.price.eql?(0)
  end

  def is_purchased?
    @product.is_purchased?(@user)
  end

  def issue_cta
    return buy_button if is_onboarded? && !is_free?
    return login_and_read_link if is_free? && @user.nil?
    return get_free_button if is_free? && @user && !is_purchased?
    return read_button if is_free? && @user && is_purchased?
    coming_soon_text
  end

  def buy_button
    link_to "Add to Cart",
            add_cart_index_path(id: @product.id),
            class: "inline-flex items-center justify-center border border-transparent bg-cx-purple px-8 py-2 text-xl font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 sm:w-auto",
            data: { turbo: false,
                    "umami-event": "Product-Page-Buy-Click",
                    "umami-event-product": @product.name }
  end

  def login_and_read_link
    link_to "Login and Read for free",
             free_purchase_purchases_path(product_id: @product.id),
             class: "text-black font-black hover:text-cx-purple font-bold lg:hidden block text-lg",
              data: { turbo_method: :post,
                      "umami-event": "Product-Page-Add-Cart-Click",
                      "umami-event-product": @product.name }
  end

  def get_free_button
    link_to "Login and Read for free",
             free_purchase_purchases_path(product_id: @product.id),
             class: "inline-flex items-center justify-center border border-transparent bg-cx-purple px-8 py-2 text-xl font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 sm:w-auto",
             data: { turbo: false,
                     "umami-event": "Product-Page-Get-Free-Click",
                     "umami-event-product": @product.name }
  end

  def read_button
    link_to "Read",
            purchase_path(slug: @product.slug),
            class: "inline-flex items-center justify-center border border-transparent bg-cx-purple px-8 py-2 text-xl font-medium text-white shadow-sm hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-800 focus:ring-offset-2 sm:w-auto",
            data: { turbo: false,
                    "umami-event": "Product-Page-Read-Free-Click",
                    "umami-event-product": @product.name }
  end

  def coming_soon_text
    "Coming Soon"
  end
end
