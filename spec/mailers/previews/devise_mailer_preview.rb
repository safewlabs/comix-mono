# frozen_string_literal: true

# spec/mailers/previews/devise_mailer_preview.rb

class DeviseMailerPreview < ActionMailer::Preview
  # We do not have confirmable enabled, but if we did, this is
  # how we could generate a preview:
  def confirmation_instructions
    Devise::Mailer.confirmation_instructions(User.first, "faketoken")
  end

  def reset_password_instructions
    Devise::Mailer.reset_password_instructions(User.first, "faketoken")
  end

  def unlock_instructions
    Devise::Mailer.unlock_instructions(User.first, "faketoken")
  end

  def email_changed
    Devise::Mailer.email_changed(User.first)
  end

  def password_changed
    Devise::Mailer.password_change(User.first)
  end
end
