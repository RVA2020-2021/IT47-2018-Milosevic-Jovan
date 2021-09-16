package rva.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rva.jpa.Team;
import rva.repositories.PlayerRepository;
import rva.repositories.TeamRepository;

import javax.transaction.Transactional;
import java.util.List;

@CrossOrigin
@RestController
public class TeamController {

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private PlayerRepository playerRepository;

    @GetMapping("teams/all")
    public List<Team> getTeamsAll() {
        return teamRepository.findAll();
    }

    @GetMapping("teams/{id}")
    public Team getTeamById(@PathVariable("id") Integer id) {
        return teamRepository.getById(id);
    }

    @GetMapping("teams/search/{name}")
    public List<Team> getTeamsByName(@PathVariable("name") String name) {
        return teamRepository.findByNameContainingIgnoreCase(name);
    }

    @PostMapping("teams/insert")
    public ResponseEntity<Team> insertTeam(@RequestBody Team team) {
        if (teamRepository.existsById(team.getId())) {
            return new ResponseEntity<Team>(HttpStatus.CONFLICT);
        }
        teamRepository.save(team);
        return new ResponseEntity<Team>(HttpStatus.OK);
    }

    @PutMapping("teams/update")
    public ResponseEntity<Team> updateTeam(@RequestBody Team team) {
        if (!teamRepository.existsById(team.getId())) {
            return new ResponseEntity<Team>(HttpStatus.NO_CONTENT);
        }
        teamRepository.save(team);
        return new ResponseEntity<Team>(HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("teams/{id}/delete")
    public ResponseEntity<Team> deleteTeam(@PathVariable("id") Integer id) {
        if (!teamRepository.existsById(id)) {
            return new ResponseEntity<Team>(HttpStatus.NO_CONTENT);
        }
        // First delete all players that play for forwarded team.
        playerRepository.deleteAllByTeam_Id(id);
        teamRepository.deleteById(id);
        return new ResponseEntity<Team>(HttpStatus.OK);
    }
}
