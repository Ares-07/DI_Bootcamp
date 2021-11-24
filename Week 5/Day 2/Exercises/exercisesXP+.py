#Exercise 1 : Family

class Family():
    def __init__(self, last_name, members):

        self.members = members
        self.last_name = last_name

    def born(self, **new_member_info):

        new_member_info['age'] = 0
        new_member_info['is_child'] = True
        self.members.append(new_member_info)
        print("Congratulations on the new baby!")

    def is_18(self, member_name):
        for person in self.members:
            if person['name'] == member_name:
                return person['age'] >= 18

    def __repr__(self):
        family_members = 'The members of the family are:'
        for member in self.members:
            family_members += f'\t{member["name"]}'
        return family_members


smith = Family('Smith', [{'name': 'Michael', 'age': 35, 'gender': 'Male', 'is_child': False}, {
                  'name': 'Sarah', 'age': 32, 'gender': 'Female', 'is_child': False}])
smith.born(name='Maya', gender='Female')
print(smith.is_18('Michael'))
print(smith)

#Exercise 2 : TheIncredibles Family
class TheIncredibles(Family):


    def use_power(self, name):
        for person in self.members:
            if person['name'] == name:
                if person['age'] >= 18:
                    print(person['power'])
                else:
                    raise Exception('You have no power here!')

    def incredible_presentation(self):
        for person in self.members:
            print(f"{person['name']}, your incredible name is {person['incredible_name']} and your incredible power is {person['power']}.")

    """The Parr family: Elastigirl(Helen), Mr. Incredible(Bob), Violet, and Dash. """
incredibles = TheIncredibles('Parr', [
    {'name': 'Bob', 'age': 40, 'gender': 'Male', 'is_child': False,
        'power': 'super strength', 'incredible_name': 'Mr. Incredible'},
    {'name': 'Helen', 'age': 36, 'gender': 'Female', 'is_child': False,
        'power': 'mutating body', 'incredible_name': 'Elastigirl'},
    {'name': 'Violet', 'age': 15, 'gender': 'Female', 'is_child': True,
        'power': 'invisibility and force fields', 'incredible_name': 'Invisigirl'},
    {'name': 'Dash', 'age': 10, 'gender': 'Male', 'is_child': True,
        'power': 'super speed', 'incredible_name': 'Speedy'}
])

incredibles.incredible_presentation()

incredibles.born(name='Baby Jack', gender='Male',
                 power='Unknown Power', incredible_name='SuperJack')
print(incredibles)
incredibles.incredible_presentation()
