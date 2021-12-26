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
public class InqridientModel {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Size(min=2,message="minimum 2 simvol yazmaq lazımdır")
	@Size(max=30,message="maximum 30 simvol yazmaq lazımdır")
	@NotEmpty(message="Boş qoymaq olmaz!")
	@Column(columnDefinition="VARCHAR(30)")
	private String inqridientName;
	
	@NotNull(message="boş qoymaq olmaz")
	@Min(value=0,message="minimum 0 yazmaq olar")
	@Max(value=100,message="maximum 100 yazmaq olar")
	private Double inqridientPrice;

	@NotNull(message="boş qoymaq olmaz")
	private Integer inqridientMiqdar;
	
}
