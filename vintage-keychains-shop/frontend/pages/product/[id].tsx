import React from "react";
import { useRouter } from "next/router";

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <main style={{ maxWidth: 600, margin: "2rem auto" }}>
      <h2>Product Details</h2>
      <p>Product ID: {id}</p>
      {/* TODO: Show product info, buy button, etc. */}
    </main>
  );
}