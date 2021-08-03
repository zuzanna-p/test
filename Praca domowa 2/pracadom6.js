function pyramid(pietra)
{
    console.log(" ".repeat(4) + "#".repeat(pietra-8))
    console.log(" ".repeat(3) + "#".repeat(pietra-6))
    console.log(" ".repeat(2) + "#".repeat(pietra-4))
    console.log(" ".repeat(1) + "#".repeat(pietra-2))
    console.log("#".repeat(pietra))
}
pyramid(9)