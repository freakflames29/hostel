class Addpricifingtohostel < ActiveRecord::Migration[7.0]
  def change
    add_column :hostels,:price,:string,:default => "500"
  end
end
