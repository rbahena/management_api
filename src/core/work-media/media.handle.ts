import { diskStorage } from "multer";


export const storage = diskStorage({
    destination: `./media-temp/`,
    filename:(req, file, cb) => {
        const extension = file.originalname.split('.').pop();
        const filename = `${Date.now()}.${extension}`;
        cb(null, filename);
    }
});