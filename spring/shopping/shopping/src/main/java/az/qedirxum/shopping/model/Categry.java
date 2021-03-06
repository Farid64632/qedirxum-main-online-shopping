package az.qedirxum.shopping.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

@Entity
public class Categry {
    

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Size(min=2,message="minimum 2 simvol yazmaq lazımdır")
	@Size(max=30,message="maximum 30 simvol yazmaq lazımdır")
	@NotEmpty(message="Boş qoymaq olmaz!")
	@Column(columnDefinition="VARCHAR(30)")
	private String category;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}
}
