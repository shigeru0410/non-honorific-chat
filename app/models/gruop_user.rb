class GruopUser < ApplicationRecord
  belong_to :group
  belong_to :user
end