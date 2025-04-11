export function getThreeRandomItems<T>(items: T[]): T[] {
  if (items?.length <= 3) return [...items];

  // Salin array agar tidak mengubah array asli
  const shuffled = [...items];

  // Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Ambil 3 item teratas
  return shuffled.slice(0, 3);
}

export function getRandomItems<T>(items: T[], limit:number): T[] {
  if (items?.length <= limit) return [...items];

  // Salin array agar tidak mengubah array asli
  const shuffled = [...items];

  // Fisher-Yates shuffle
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Ambil 3 item teratas
  return shuffled.slice(0, limit);
}

export function truncateText(title: string, maxLength: number): string {
  // Jika panjang title sudah kurang atau sama dengan maxLength, kembalikan title asli
  if (title?.length <= maxLength) return title;
  
  // Potong string hingga maxLength
  const truncated = title?.slice(0, maxLength);
  
  // Cari indeks spasi terakhir pada potongan string
  const lastSpaceIndex = truncated?.lastIndexOf(" ");
  
  // Jika ada spasi, potong hingga spasi tersebut untuk menghindari memotong kata
  // Jika tidak ada, gunakan potongan langsung
  return (lastSpaceIndex > 0 ? truncated?.slice(0, lastSpaceIndex) : truncated) + "...";
}

export function slugToText(slug: string): string {
  // Mengganti semua tanda '-' dengan spasi
  return slug.replace(/-/g, ' ');
}