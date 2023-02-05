-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "habitId" TEXT NOT NULL,
    CONSTRAINT "User_habitId_fkey" FOREIGN KEY ("habitId") REFERENCES "habits" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
