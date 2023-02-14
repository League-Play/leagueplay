-- CreateTable
CREATE TABLE "Team" (
    "stripeId" TEXT NOT NULL,
    "teamName" TEXT NOT NULL,
    "referredBy" TEXT NOT NULL,
    "teamCaptainId" TEXT NOT NULL,
    "full" BOOLEAN NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("stripeId")
);

-- CreateTable
CREATE TABLE "Teammate" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "teamStripeId" TEXT,

    CONSTRAINT "Teammate_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamCaptain" (
    "id" TEXT NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "tournament_id" TEXT NOT NULL,

    CONSTRAINT "TeamCaptain_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_teamCaptainId_fkey" FOREIGN KEY ("teamCaptainId") REFERENCES "TeamCaptain"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Teammate" ADD CONSTRAINT "Teammate_teamStripeId_fkey" FOREIGN KEY ("teamStripeId") REFERENCES "Team"("stripeId") ON DELETE SET NULL ON UPDATE CASCADE;
