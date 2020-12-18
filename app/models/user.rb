class User < ApplicationRecord
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  before_save { self.email = email.downcase }
  VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i.freeze
  VALID_USERNAME_REGEX = /\A[a-zA-Z0-9_]+\z/.freeze
  validates :email, format: { with: VALID_EMAIL_REGEX }, uniqueness: { case_sensitive: false }
  validates :username, presence: true, length: { maximum: 50 },
                       format: { with: VALID_USERNAME_REGEX }
  validates :postal_code, presence: true, numericality: {only_integer: true}, length: { is: 7 }
  validates :prefecture_code, presence: true
  validates :city, presence: true
end
