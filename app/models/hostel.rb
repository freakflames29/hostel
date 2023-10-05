class Hostel < ApplicationRecord
  before_save :downcase_all
  belongs_to :user
  validates :title, presence: true
  validates_presence_of :desc
  validates_presence_of :landmark
  validates_presence_of :address
  validates_presence_of :zipcode
  validates_presence_of :city
  validates_presence_of :country
  validates_presence_of :img

  def downcase_all
    self.title = title.downcase
    self.desc = desc.downcase
    self.address = address.downcase
    self.city = city.downcase
    self.country = country.downcase
    self.img = img.downcase
  end
end
