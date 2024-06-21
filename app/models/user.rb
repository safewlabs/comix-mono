# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id                     :bigint           not null, primary key
#  access_code            :string
#  confirmation_sent_at   :datetime
#  confirmation_token     :string
#  confirmed_at           :datetime
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :string
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  first_name             :string
#  last_name              :string
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :string
#  provider               :string
#  publishable_key        :string
#  remember_created_at    :datetime
#  reset_password_sent_at :datetime
#  reset_password_token   :string
#  sign_in_count          :integer          default(0), not null
#  tokens                 :json
#  uid                    :string           default(""), not null
#  unconfirmed_email      :string
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#  stripe_user_id         :string
#
# Indexes
#
#  index_users_on_confirmation_token    (confirmation_token) UNIQUE
#  index_users_on_email                 (email) UNIQUE
#  index_users_on_reset_password_token  (reset_password_token) UNIQUE
#  index_users_on_uid_and_provider      (uid,provider) UNIQUE
#
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable,
         :confirmable, :omniauthable
  include GraphqlDevise::Authenticatable
  devise :omniauthable, omniauth_providers: [:google_oauth2]
  rolify
  has_many :projects
  has_one :store
  has_one :creator_profile
  has_one_attached :avatar
  has_many :backings, dependent: :destroy
  has_many :projects, through: :backings
  has_many :creator_profiles_managers, dependent: :destroy
  has_many :managed_profiles,
           class_name: "CreatorProfile",
           foreign_key: :creator_profile_id,
           through: :creator_profiles_managers
  has_many :purchases, dependent: :destroy
  has_many :products, through: :purchases
  has_many :orders
  # validates :first_name, :last_name, :email, :password, presence: true
  # validates_confirmation_of :password
  before_validation :set_uid_provider

  def can_receive_payments?
    uid? && provider? && access_code? && publishable_key?
  end

  def set_uid_provider
    self.provider = "email"
    self.uid = self.email
  end

  def self.from_google(u)
    create_with(uid: u[:uid], provider: "google",
                password: Devise.friendly_token[0, 20]).find_or_create_by!(email: u[:email])
  end
end
