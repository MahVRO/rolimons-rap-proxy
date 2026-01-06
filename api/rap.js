export default async function handler(req, res) {
  try {
    const userId = "1079842921";

    const r = await fetch(
      `https://www.rolimons.com/api/player/${userId}`,
      { headers: { "User-Agent": "Mozilla/5.0" } }
    );

    const data = await r.json();

    res.setHeader("Cache-Control", "s-maxage=300, stale-while-revalidate");
    res.status(200).json({ rap: data.rap });
  } catch {
    res.status(500).json({ rap: null });
  }
}
