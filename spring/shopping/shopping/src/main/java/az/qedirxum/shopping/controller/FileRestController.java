package az.qedirxum.shopping.controller;



import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import az.qedirxum.shopping.file.StorageFileNotFoundException;
import az.qedirxum.shopping.file.StorageService;
import az.qedirxum.shopping.model.ImageBean;



@RestController
@RequestMapping(path = "/files")
@CrossOrigin(origins = "*")
public class FileRestController {
    private final StorageService storageService;

    public FileRestController(StorageService storageService) {
        this.storageService = storageService;
    }

    @GetMapping("/files/{filename:.+}")
    @ResponseBody
    public ResponseEntity<Resource> serveFile(@PathVariable String filename) {

        Resource file = storageService.loadAsResource(filename);
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
                .body(file);
    }

    @ExceptionHandler(StorageFileNotFoundException.class)
    public ResponseEntity<?> handleStorageFileNotFound(StorageFileNotFoundException exc) {
        return ResponseEntity.notFound().build();
    }

    @RequestMapping(value = "", method = RequestMethod.POST, consumes = MediaType.MULTIPART_FORM_DATA_VALUE)

    @ResponseStatus(HttpStatus.CREATED)

    public ImageBean createFile(@RequestParam(name = "file", required = false) MultipartFile file) {
        ImageBean bean = new ImageBean();
        String imageFileName = "fakeimage.png";
        if (file == null) {

        } else {
            imageFileName = storageService.store(file);
        }

        bean.setFileName(imageFileName);
        return bean;

    }

}
