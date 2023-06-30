puts 'seeding'
# Applicant.create(first_name: 'Steve', last_name: 'Stevenson', position: 'Taco Master', email: 'steve@stevemail.com', phone: 1234567890, city: 'Coolsville', state: 'Ohio', user_id: 1)
# User.create(first_name: 'Todd', last_name: 'Toddson', title: 'owner', username: 'IAMTODD!')
# Note.create(applicant_id: 1, user_id: 1, body: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
Applicant.first.lists << List.create(name: 'Call List of Doom 2: Electric Boogaloo!!!!!', user_id: 3)
# Job.create(title: 'Cool Cat', description: 'Just be out there killin it', pay_rate: '30-45', location: 'Coolsville, Ohio', company: 'Cool Cats inc', user_id: 1)
# User.create(first_name: "Tucker", last_name: "Tuckson", title: "recruiter", username: "HiTodd,ImTucker")
# Job.create(title: 'Hitman', description: 'Just be out there killin it', pay_rate: '30-45', location: 'Coolsville, Ohio', company: 'Cool Cats inc', user_id: 1)
puts 'seeded'