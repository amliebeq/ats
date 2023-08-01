# puts 'seeding'
#     10. times do User.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, title: Faker::Job.title, username: 'floof', password: 'hotdog')
#     25.times do Applicant.create(first_name: Faker::Name.first_name, last_name: Faker::Name.last_name, position: Faker::Job.title, email: Faker::Internet.email, phone: Faker::Number.number(digits: 10), city: Faker::Address.city, state: Faker::Address.state, user_id: 1) end
#     10.times do Job.create(title: Faker::Job.title, description: Faker::Quote.jack_handey, pay_rate: Faker::Number.number(digits: 2), location: Faker::Address.full_address, company: Faker::Company.name, user_id: 1) end
#     10.times do List.create(name: Faker::Games::DnD.klass, user_id:1) end
#     50.times do Note.create(body: Faker::Quote.famous_last_words, applicant_id: rand(1..25), user_id: 1) end
# puts 'seeded'