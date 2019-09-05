
People Table
Id |  Fullname      | Gender  |
---|----------------|---------|
1  |Clark Kent      | Male    |
2  |Barry Allen     | Male    |
3  |Diana Prince    | Male    |
4  |Bruce Banner    | Male    |
5  |Wanda Maximoff  | Male    |

Power Table
Id | UserId | Power                   |
---|--------|-------------------------|
1  | 1      | super human strength    |
2  | 1      | flight                  |
3  | 1      | x-ray vision            |
4  | 1      | heat vision             |
5  | 2      | super speed             |
6  | 2      | phasing                 |
7  | 2      | time travel             |
8  | 2      | dimensional travel      |
9  | 3      | super human strength    |
1  | 3      | super human reflexes    |
2  | 3      | super human agility     |
3  | 3      | super human flight      |
4  | 4      | super human strength    |
5  | 4      | thunder clap            |
6  | 4      | super healing factor    |
7  | 5      | reality manipulation    |
8  | 5      | astral projection       |
9  | 5      | psionic                 |

Address Table
Id | UserId | Address         | City    | Country |
---|--------|-----------------|---------|-----------|
1  | 1      | 123 A street    | Jakarta | Indonesia |
2  | 1      | 333 A street    | Jakarta | Indonesia |
3  | 1      | 234 A street    | Jakarta | Indonesia |
4  | 2      | 321 A street    | Jakarta | Indonesia |
5  | 2      | 122 A street    | Jakarta | Indonesia |
6  | 2      | 111 A street    | Jakarta | Indonesia |
7  | 2      | 221 A street    | Jakarta | Indonesia |
8  | 3      | 432 A street    | Jakarta | Indonesia |
9  | 3      | 453 A street    | Jakarta | Indonesia |
1  | 3      | 132 A street    | Jakarta | Indonesia |
2  | 3      | 231 A street    | Jakarta | Indonesia |
3  | 4      | 521 A street    | Jakarta | Indonesia |
4  | 4      | 444 A street    | Jakarta | Indonesia |
5  | 4      | 222 A street    | Jakarta | Indonesia |
6  | 5      | 524 A street    | Jakarta | Indonesia |
7  | 5      | 324 A street    | Jakarta | Indonesia |
8  | 5      | 635 A street    | Jakarta | Indonesia |

API Endpoints
- Get - Query Users by (ID, name, Address, Power, Gender, City, Country)
- Get - All Users
- Get - Address, Power By UserId
- Post - Create new User, Power, Address
- Put - Change User info, Power, Address
- Delete - User, Power, Address