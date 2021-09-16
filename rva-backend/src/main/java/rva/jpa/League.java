package rva.jpa;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;
import javax.persistence.*;
import java.util.List;


/**
 * The persistent class for the league database table.
 * 
 */
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
@Entity
@NamedQuery(name="League.findAll", query="SELECT l FROM League l")
public class League implements Serializable {
	private static final long serialVersionUID = 1L;

	@Id
	@SequenceGenerator(name="LEAGUE_ID_GENERATOR", sequenceName="LEAGUE_SEQ")
	@GeneratedValue(strategy=GenerationType.SEQUENCE, generator="LEAGUE_ID_GENERATOR")
	private Integer id;

	private String label;

	private String name;

	//bi-directional many-to-one association to Team
	@JsonIgnore
	@OneToMany(mappedBy="league")
	private List<Team> teams;

	public League() {
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getLabel() {
		return this.label;
	}

	public void setLabel(String label) {
		this.label = label;
	}

	public String getName() {
		return this.name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public List<Team> getTeams() {
		return this.teams;
	}

	public void setTeams(List<Team> teams) {
		this.teams = teams;
	}

	public Team addTeam(Team team) {
		getTeams().add(team);
		team.setLeague(this);

		return team;
	}

	public Team removeTeam(Team team) {
		getTeams().remove(team);
		team.setLeague(null);

		return team;
	}

}