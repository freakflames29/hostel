class Addgendertouser < ActiveRecord::Migration[7.0]
  def change
    add_column :users,:gender,:string,:default => "M"
  end
end
