// place files you want to import through the `$lib` alias in this folder.
import { PrismaClient } from '@prisma/client';

export const db = new PrismaClient();
