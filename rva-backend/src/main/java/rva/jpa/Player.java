package rva.jpa;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;


/**
 * The persistent class for the player database table.
 * 
 */
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@NamedQuery(name="Player.findAll", query="SELECT p FROM Player p")
public class Player implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="PLAYER_ID_GENERATOR", sequenceName="PLAYER_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="PLAYER_ID_GENERATOR")
	private Integer id;

	@Temporal(TemporalType.DATE)
	@Column(name="date_of_birth")
	private Date dateOfBirth;

	@Column(name="first_name")
	private String firstName;

	@Column(name="last_name")
	private String lastName;

	@Column(name="registration_number")
	private String registrationNumber;

	//bi-directional many-to-one association to Nationality
	@ManyToOne
	@JoinColumn(name="nationality")
	private Nationality nationality;

	//bi-directional many-to-one association to Team
	@ManyToOne
	@JoinColumn(name="team")
	private Team team;

	public Player() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getDateOfBirth() {
		return this.dateOfBirth;
	}

	public void setDateOfBirth(Date dateOfBirth) {
		this.dateOfBirth = dateOfBirth;
	}

	public String getFirstName() {
		return this.firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return this.lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getRegistrationNumber() {
		return this.registrationNumber;
	}

	public void setRegistrationNumber(String registrationNumber) {
		this.registrationNumber = registrationNumber;
	}

	public Nationality getNationality() {
		return this.nationality;
	}

	public void setNationality(Nationality nationality) {
		this.nationality = nationality;
	}

	public Team getTeam() {
		return this.team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}

}