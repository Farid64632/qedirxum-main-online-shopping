package az.qedirxum.shopping.file;
import lombok.Getter;
import lombok.Setter;
import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("storage")

public class StorageProperties {
    private String location = "upload-dir-qedirxum-shopping";

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }


}
