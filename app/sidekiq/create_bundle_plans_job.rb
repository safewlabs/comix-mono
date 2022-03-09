class CreateBundlePlansJob
  include Sidekiq::Job

  def perform(project)
    key = project.user.access_code
    Stripe.api_key = key

    project.bundles.each do |bundle|
      Stripe::Plan.create({
        id: "#{bundle.title.parameterize}-bundle_#{bundle.id}",
        amount: (bundle.pledge_amount.to_r * 100).to_i,
        currency: 'usd',
        interval: 'month',
        product: { name: bundle.title },
        nickname: bundle.title.parameterize
      })
    end
  end
end
