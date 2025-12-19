"use client"
export default async function ProductDetailComponent({params}) {
  const {id}= await params
    alert(JSON.stringify(id))
return(<div>
    hello
</div>)

}