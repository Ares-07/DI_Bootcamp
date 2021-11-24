class Door:
    def __init__(self, is_opened):
        self.is_opened = True
    def open(self):
        self.is_opened = True
    def close(self):
        self.is_opened = False

door = Door()

door.is_opened
door.close()
door.is_opened

class BlockedDoor:
    def __init__(self):
        pass
    def open(self):
        return exception("The door is blocked and cannot be opened")

    def close(self):
        return exception("The door is blocked and cannot be closed")

blocked_door = BlockedDoor()
blocked_door.is_opened

blocked_door.open()
blocked_door.is_opened
