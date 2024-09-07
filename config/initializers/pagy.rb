# frozen_string_literal: true

require "pagy/extras/array"
require "pagy/extras/overflow"

Pagy::DEFAULT[:items] = 8
Pagy::DEFAULT[:overflow] = :last_page
