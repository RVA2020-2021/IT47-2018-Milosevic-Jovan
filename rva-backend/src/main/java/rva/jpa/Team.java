package rva.jpa;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;
import javax.persistence.*;
import java.util.Date;
import java.util.List;


/**
 * The persistent class for the team database table.
 * 
 */
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@NamedQuery(name="Team.findAll", query="SELECT t FROM Team t")
public class Team implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="TEAM_ID_GENERATOR", sequenceName="TEAM_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="TEAM_ID_GENERATOR")
	private Integer id;

	@Temporal(TemporalType.DATE)
	@Column(name="founding_date")
	private Date foundingDate;

	private String name;

	private String place;

	//bi-directional many-to-one association to Player
	@JsonIgnore
	@OneToMany(mappedBy= "team")
	private List<Player> players;

	//bi-directional many-to-one association to League
	@ManyToOne
	@JoinColumn(name="league")
	private League league;

	public Team() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getFoundingDate() {
		return this.foundingDate;
	}

	public void setFoundingDate(Date foundingDate) {
		this.foundingDate = foundingDate;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getPlace() {
		return this.place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public List<Player> getPlayers() {
		return this.players;
	}

	public void setPlayers(List<Player> players) {
		this.players = players;
	}

	public Player addPlayer(Player player) {
		getPlayers().add(player);
		player.setTeam(this);

		return player;
	}

	public Player removePlayer(Player player) {
		getPlayers().remove(player);
		player.setTeam(null);

		return player;
	}

	public League getLeague() {
		return this.league;
	}

	public void setLeague(League league) {
		this.league = league;
	}

}