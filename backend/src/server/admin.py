from uuid import UUID, uuid4


class Admin:
    admin_key: UUID = uuid4()


admin = Admin()
