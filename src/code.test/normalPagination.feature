@ud_G
Feature: test the normal pagination.
  Scenario: set up data and test it.
    Given ud_G ==> prepare the data.
      | itemSize:number | current:number | dataCount:number | pageSize:number | 
      | 3               | 22             | 345              | 10              | 
     When ud_G ==> intial the normal pagination.
     Then ud_G ==> the result should equal those data.
      | isCurrent:boolean | isShow:boolean | index:number | text         | description | 
      | false             | true           | 0            | &lt;&lt;&lt; | 1           | 
  
  
