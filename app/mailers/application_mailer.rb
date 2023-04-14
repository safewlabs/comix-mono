# frozen_string_literal: true

class ApplicationMailer < ActionMailer::Base
  default from: "contact@comix.one"
  layout "mailer"
end
