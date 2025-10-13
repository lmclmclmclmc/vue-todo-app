import { Router } from 'express'

import Todo from '../routes/models/todo'
const router = Router()

router.get('/',async(_req,res)=>{
  try{
    const list =await Todo.find().lean()
    const mapped=list.map(t=>({...t,id:t._id.toString()}))
    res.json(mapped)
  }catch(e){
    res.status(500).json({message:(e as Error).message})
  }
})

router.post('/',async(req,res)=>{
  try{
    const {text}=req.body;
    if(!text)return res.status(400).json({message:'text required'})
      const created=await Todo.create({text})
    res.status(201).json({...created.toObject(),id:created._id.toString()})
  }catch(e){
    res.status(500).json({message:(e as Error).message})
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const updated = await Todo.findByIdAndUpdate(
      req.params.id,          // ③ _id 直接接受字符串，Mongoose 会转 ObjectId
      req.body,
      { new: true }           // 返回更新后的文档
    ).lean()
    if (!updated) return res.status(404).json({ message: 'Not found' })

    res.json({ ...updated, id: updated._id.toString() })
  } catch (e) {
    res.status(500).json({ message: (e as Error).message })
  }
})

// DELETE /todos/:id
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Todo.findByIdAndDelete(req.params.id)
    if (!deleted) return res.status(404).json({ message: 'Not found' })
    res.status(204).send()
  } catch (e) {
    res.status(500).json({ message: (e as Error).message })
  }
})

export default router
