import express, { Request, Response, Router } from 'express';
const router: Router = express.Router();
export default router;

// models 
import Book from '../models/book';

// Post Method
router.post('/post', (req: Request, res: Response): void => {
    res.send('Post API');

    /*
    const book = new Book({
        title: req.body.title,  
        author: req.body.author
    });

    try {
        const dataToSave = book.save();
        res.status(200).json(dataToSave);
    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message})
    }
    */
});

// Get all Method
router.get('/getAll', async (req: Request, res: Response): Promise<void> => {
    res.send('GET ALL API');

    /*
    try {
        const data = await Book.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
    */
});

// Get by ID Method
router.get('/getOne/:id', (req: Request, res: Response): void => {
    res.send('Get by ID API');
});

// Update by ID Method
router.patch('/update/:id', (req: Request, res: Response): void => {
    res.send('Update by ID API');
});

// Delete by ID Method
router.delete('/delete/:id', (req: Request, res: Response): void => {
    res.send('Delete by ID API');
});