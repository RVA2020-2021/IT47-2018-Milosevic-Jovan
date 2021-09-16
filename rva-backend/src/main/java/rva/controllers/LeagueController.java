package rva.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import rva.jpa.League;
import rva.jpa.Team;
import rva.repositories.LeagueRepository;
import rva.repositories.PlayerRepository;
import rva.repositories.TeamRepository;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
public class LeagueController {

    @Autowired
    private LeagueRepository leagueRepository;

    @Autowired
    private TeamRepository teamRepository;

    @Autowired
    private PlayerRepository playerRepository;

    @GetMapping("leagues/all")
    public List<League> getLeaguesAll() {
        return leagueRepository.findAll();
    }

    @GetMapping("leagues/{id}")
    public League getLeagueById(@PathVariable("id") Integer id) {
        return leagueRepository.getById(id);
    }

    @GetMapping("leagues/search/{name}")
    public List<League> getLeaguesByName(@PathVariable("name") String name) {
        return leagueRepository.findByNameContainingIgnoreCase(name);
    }

    @PostMapping("leagues/insert")
    public ResponseEntity<League> insertLeague(@RequestBody League league) {
        if (leagueRepository.existsById(league.getId())) {
            return new ResponseEntity<League>(HttpStatus.CONFLICT);
        }
        leagueRepository.save(league);
        return new ResponseEntity<League>(HttpStatus.OK);
    }

    @PutMapping("leagues/update")
    public ResponseEntity<League> updateLeague(@RequestBody League league) {
        if (!leagueRepository.existsById(league.getId())) {
            return new ResponseEntity<League>(HttpStatus.NO_CONTENT);
        }
        leagueRepository.save(league);
        return new ResponseEntity<League>(HttpStatus.OK);
    }

    @Transactional
    @DeleteMapping("leagues/{id}/delete")
    public ResponseEntity<League> deleteLeague(@PathVariable("id") Integer id) {
        if (!leagueRepository.existsById(id)) {
            return new ResponseEntity<League>(HttpStatus.NO_CONTENT);
        }

        // Next block of code could also be removed if cascade delete is enabled

        // First delete all players that play in forwarded league.
        List<Team> teams = teamRepository.findAllByLeague_Id(id);
        List<Integer> team_ids = new ArrayList<>();
        teams.forEach(team -> {
            team_ids.add(team.getId());
        });
        playerRepository.deleteAllByTeam_IdIn(team_ids);

        // Then delete all teams that are in forwarded league.
        teamRepository.deleteAllByLeague_Id(id);
        leagueRepository.deleteById(id);
        return new ResponseEntity<League>(HttpStatus.OK);
    }
}
