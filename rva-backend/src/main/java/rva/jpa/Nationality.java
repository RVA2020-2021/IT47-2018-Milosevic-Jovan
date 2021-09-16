package rva.jpa;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the nationality database table.
 * 
 */
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@NamedQuery(name="Nationality.findAll", query="SELECT n FROM Nationality n")
public class Nationality implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="NATIONALITY_ID_GENERATOR", sequenceName="NATIONALITY_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="NATIONALITY_ID_GENERATOR")
	private Integer id;

	private String abbreviation;

	private String name;

	//bi-directional many-to-one association to Player
	@JsonIgnore
	@OneToMany(mappedBy="nationality")
	private List<Player> players;

	public Nationality() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getAbbreviation() {
		return this.abbreviation;
	}

	public void setAbbreviation(String abbreviation) {
		this.abbreviation = abbreviation;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Player> getPlayers() {
		return this.players;
	}

	public void setPlayers(List<Player> players) {
		this.players = players;
	}

	public Player addPlayer(Player player) {
		getPlayers().add(player);
		player.setNationality(this);

		return player;
	}

	public Player removePlayer(Player player) {
		getPlayers().remove(player);
		player.setNationality(null);

		return player;
	}

}