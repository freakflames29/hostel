class Adddesctouser < ActiveRecord::Migration[7.0]
  def change
    add_column :users, :desc, :text
  end
end
