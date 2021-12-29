package az.qedirxum.shopping.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Entity
public class Food {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	
	@Size(min=2,message="minimum 2 simvol yazmaq lazımdır")
	@Size(max=60,message="maximum 60 simvol yazmaq lazımdır")
	@NotEmpty(message="Boş qoymaq olmaz!")
	@NotNull(message="boş qoymaq olmaz")
	@Column(columnDefinition="VARCHAR(60)")
	private String name;
	
	@NotNull(message="boş qoymaq olmaz")
	@Min(value=0,message="minimum 0 yazmaq olar")
	@Max(value=1000,message="maximum 1000 yazmaq olar")
	private Double price;
	
	@Size(min=2,message="minimum 2 simvol yazmaq lazımdır")
	@Size(max=60,message="maximum 60 simvol yazmaq lazımdır")
	@NotEmpty(message="Boş qoymaq olmaz!")
	@NotNull(message="boş qoymaq olmaz")
	private String miqdar;

	@NotNull(message="boş qoymaq olmaz")
	@Size(min=2,message="minimum 2 simvol yazmaq lazımdır")
	@Size(max=200,message="maximum 200 simvol yazmaq lazımdır")
	@NotEmpty(message="Boş qoymaq olmaz!")
	private String description;
	
	@NotNull(message="boş qoymaq olmaz")
	@Size(min=2,message="minimum 2 simvol yazmaq lazımdır")
	@Size(max=200,message="maximum 200 simvol yazmaq lazımdır")
	@NotEmpty(message="Boş qoymaq olmaz!")
	private String category;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public String getMiqdar() {
		return miqdar;
	}
	public void setMiqdar(String miqdar) {
		this.miqdar = miqdar;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getCategory() {
		return category;
	}
	public void setCategory(String category) {
		this.category = category;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	private String image;


}
