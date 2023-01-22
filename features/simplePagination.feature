@ud_G
Feature: test the normal pagination.
	Scenario: set up data and test it #1.
		Given ud_G ==> prepare the pagination data.
			| pagerSize:Number | currentPage:Number | total:Number | size:Number |
			| 3                | 9                  | 64           | 5           |
		When ud_G ==> prepare the normal pagination.
		Then ud_G ==> the page items should equal those data.
			| isCurrent:Boolean | isEnabled:Boolean | index:Number | text  | type      |
			| false             | true              | 0            | first | First     |
			| false             | true              | 6            | <<    | PreGroup  |
			| false             | true              | 8            | <     | Previous  |
			| true              | true              | 9            | 10    | Number    |
			| false             | true              | 10           | 11    | Number    |
			| false             | true              | 11           | 12    | Number    |
			| false             | true              | 10           | >     | Next      |
			| false             | true              | 12           | >>    | NextGroup |
			| false             | true              | 12           | last  | Last      |
		And ud_G ==> the pagination should equal those data.
			| total:Number | currentPage:Number |
			| 64           | 9                  |

	Scenario: set up data and test it #2.
		Given ud_G ==> prepare the pagination data.
			| pagerSize:Number | currentPage:Number | total:Number | size:Number |
			| 3                | 0                  | 64           | 5           |
		When ud_G ==> prepare the normal pagination.
		Then ud_G ==> the page items should equal those data.
			| isCurrent:Boolean | isEnabled:Boolean | index:Number | text  | type      |
			| false             | false             | 0            | first | First     |
			| false             | false             | -1           | <<    | PreGroup  |
			| false             | false             | -1           | <     | Previous  |
			| true              | true              | 0            | 1     | Number    |
			| false             | true              | 1            | 2     | Number    |
			| false             | true              | 2            | 3     | Number    |
			| false             | true              | 1            | >     | Next      |
			| false             | true              | 3            | >>    | NextGroup |
			| false             | true              | 12           | last  | Last      |
		And ud_G ==> the pagination should equal those data.
			| total:Number | currentPage:Number |
			| 64           | 0                  |

	Scenario: set up data and test it #3.
		Given ud_G ==> prepare the pagination data.
			| pagerSize:Number | currentPage:Number | total:Number | size:Number |
			| 3                | 1                  | 64           | 5           |
		When ud_G ==> prepare the normal pagination.
		Then ud_G ==> the page items should equal those data.
			| isCurrent:Boolean | isEnabled:Boolean | index:Number | text  | type      |
			| false             | true              | 0            | first | First     |
			| false             | false             | -1           | <<    | PreGroup  |
			| false             | true              | 0            | <     | Previous  |
			| false             | true              | 0            | 1     | Number    |
			| true              | true              | 1            | 2     | Number    |
			| false             | true              | 2            | 3     | Number    |
			| false             | true              | 2            | >     | Next      |
			| false             | true              | 3            | >>    | NextGroup |
			| false             | true              | 12           | last  | Last      |
		And ud_G ==> the pagination should equal those data.
			| total:Number | currentPage:Number |
			| 64           | 1                  |

	Scenario: set up data and test it #4.
		Given ud_G ==> prepare the pagination data.
			| pagerSize:Number | currentPage:Number | total:Number | size:Number |
			| 3                | 2                  | 64           | 5           |
		When ud_G ==> prepare the normal pagination.
		Then ud_G ==> the page items should equal those data.
			| isCurrent:Boolean | isEnabled:Boolean | index:Number | text  | type      |
			| false             | true              | 0            | first | First     |
			| false             | false             | -1           | <<    | PreGroup  |
			| false             | true              | 1            | <     | Previous  |
			| false             | true              | 0            | 1     | Number    |
			| false             | true              | 1            | 2     | Number    |
			| true              | true              | 2            | 3     | Number    |
			| false             | true              | 3            | >     | Next      |
			| false             | true              | 3            | >>    | NextGroup |
			| false             | true              | 12           | last  | Last      |
		And ud_G ==> the pagination should equal those data.
			| total:Number | currentPage:Number |
			| 64           | 2                  |

	Scenario: set up data and test it #5.
		Given ud_G ==> prepare the pagination data.
			| pagerSize:Number | currentPage:Number | total:Number | size:Number |
			| 3                | 3                  | 64           | 5           |
		When ud_G ==> prepare the normal pagination.
		Then ud_G ==> the page items should equal those data.
			| isCurrent:Boolean | isEnabled:Boolean | index:Number | text  | type      |
			| false             | true              | 0            | first | First     |
			| false             | true              | 0            | <<    | PreGroup  |
			| false             | true              | 2            | <     | Previous  |
			| true              | true              | 3            | 4     | Number    |
			| false             | true              | 4            | 5     | Number    |
			| false             | true              | 5            | 6     | Number    |
			| false             | true              | 4            | >     | Next      |
			| false             | true              | 6            | >>    | NextGroup |
			| false             | true              | 12           | last  | Last      |
		And ud_G ==> the pagination should equal those data.
			| total:Number | currentPage:Number |
			| 64           | 3                  |

	Scenario: set up data and test it #6.
		Given ud_G ==> prepare the pagination data.
			| pagerSize:Number | currentPage:Number | total:Number | size:Number |
			| 3                | 12                 | 64           | 5           |
		When ud_G ==> prepare the normal pagination.
		Then ud_G ==> the page items should equal those data.
			| isCurrent:Boolean | isEnabled:Boolean | index:Number | text  | type      |
			| false             | true              | 0            | first | First     |
			| false             | true              | 9            | <<    | PreGroup  |
			| false             | true              | 11           | <     | Previous  |
			| true              | true              | 12           | 13    | Number    |
			| false             | false             | -1           | >     | Next      |
			| false             | false             | -1           | >>    | NextGroup |
			| false             | false             | -1           | last  | Last      |
		And ud_G ==> the pagination should equal those data.
			| total:Number | currentPage:Number |
			| 64           | 12                 |

	Scenario: set up data and test it #7.
		Given ud_G ==> prepare the pagination data.
			| pagerSize:Number | currentPage:Number | total:Number | size:Number |
			| 3                | 11                 | 64           | 5           |
		When ud_G ==> prepare the normal pagination.
		Then ud_G ==> the page items should equal those data.
			| isCurrent:Boolean | isEnabled:Boolean | index:Number | text  | type      |
			| false             | true              | 0            | first | First     |
			| false             | true              | 6            | <<    | PreGroup  |
			| false             | true              | 10           | <     | Previous  |
			| false             | true              | 9            | 10    | Number    |
			| false             | true              | 10           | 11    | Number    |
			| true              | true              | 11           | 12    | Number    |
			| false             | true              | 12           | >     | Next      |
			| false             | true              | 12           | >>    | NextGroup |
			| false             | true              | 12           | last  | Last      |
		And ud_G ==> the pagination should equal those data.
			| total:Number | currentPage:Number |
			| 64           | 11                 |
