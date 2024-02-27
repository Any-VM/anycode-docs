const express = require("express")
const marked = require("marked")
const matter = require("gray-matter")
const fs = require("fs")

const app = express()
app.set("view engine", "ejs")

let docs = []
fs.readdirSync("./docs/").forEach((file) => {
    const data = matter(fs.readFileSync(`./docs/${file}`))

    docs.push({
        id: data.data.id,
        title: data.data.title,
        icon: data.data.gicon,
        path: file.replace(".md", "")
    })
})

docs.sort((_1, _2) => {
    if (_2.id > _1.id) return -1
    else if (_2.id < _1.id) return 1
    else return 0
})

console.log("[AnyDocs] Indexed files complete!")
console.log(docs)

app.get("/", async (req, res) => {
    res.redirect('/intro')
})

app.get("/:page", async (req, res) => {
    try {
        
        const file = await fs.promises.readFile(`./docs/${req.params.page}.md`, "utf-8")
        let page = matter(file)
        page.content = marked.parse(page.content)

        res.render("doc.ejs", {
            page: page,
            pages: docs
        })
    } catch (err) {
        console.error(`[AnyDocs] 404 at ${req.params.page}`)
        res.status(404).render("404.ejs");
    }
})

app.listen(8080, () => {
    console.log("[AnyDocs] Running on port 8080")
})