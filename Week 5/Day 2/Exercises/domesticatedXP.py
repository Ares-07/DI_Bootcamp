#Exercise 3 : Dogs Domesticated
import random

from exercisexp import Dog


class Petdog(Dog):
    def __init__(self, name, age, weight):
        super().__init__(name, age, weight)

        self.trained = False

    def train(self):
        self.trained = True
        print(self.bark())

    def play(self, *args):
        print(f"{self.name}, {self.args} all play together ")

    def do_a_trick(self):
        random_print_list = [f"{self.name} does a barell roll", f"{self.name} does stands on his back legs",
                             f"{self.name} shakes your hand", f"{self.name} plays dead"]
        if self.trained:
            print(random_print_list[random.randint(0, 4)])


rex = Petdog("rex", 5, 12)
rex.train()
rex.do_a_trick()
